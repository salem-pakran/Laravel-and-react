<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Web_site;

use GuzzleHttp\Psr7\Message;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $validator = validator::make($request->all(),[
            'name' => 'required|max:191',
            'email'    => 'required|email|max:191|unique:users,email',
            'password' => 'required|min:8',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'validation_errors'=>$validator->getMessageBag(),
            ]);

        }else{
/*
            $web_site =new Web_site();
            $web_site->user_id = $request->id;
            $web_site->save();
*/

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $token = $user->createToken($user->email.'_token')->plainTextToken;
            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'id'=>$user->id,
                'message'=>'Register Successfully',
            ]);

        }

    }

    public function login(Request $request)
    {
        $validator = validator::make($request->all(),[

            'email'    => 'required|email|max:191',
            'password' => 'required|min:8',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'validation_errors'=>$validator->getMessageBag(),
            ]);

        }else{

            $user = User::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid  Login',
                ]);

            }else{

                $token = $user->createToken($user->email.'_token')->plainTextToken;
                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'id'=>$user->id,
                    'user'=>$user,
                    'token'=>$token,
                    'message'=>'Logged In Successfully',
                ]);


            }

        }
    }
    public function fetchUsers(){
        $user =  User::all();
        return response()->json([
            'status'=>200,
            'message'=>'fetchUsers Successfully',
            'id'=>$user->id,
            'user'=>$user,
        ]);




    }
}
