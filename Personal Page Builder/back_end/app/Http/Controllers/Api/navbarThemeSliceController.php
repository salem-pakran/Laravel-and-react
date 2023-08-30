<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Navbar;
use App\Models\Link;
use App\Models\Headertheme;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;


class navbarThemeSliceController extends Controller
{


    //fetchNavbarTheme or index
    public function fetchNavbarTheme()
    {
        //$link = Link::where( 'web_sites_id' , 1)->get();
        $link = Link::all();
        return response()->json([
            'status'=>200,
            'linkes'=> $link,
            'message'=>'fetchNavbar successfully',
        ]);

        /*
            $Navbar = new Navbar();
            return response()->json([
                'status'=>200,
                'link'=>$Navbar->link,
                'type'=>$Navbar->type,
                'message'=>'fetchNavbar successfully',
            ]);*/

            /*$data['navbarTheme'] = Navbar::all();
            return response()->json([
                'status'=>200,
                'data'=>$data,
        ]);*/

    }


    public function addlinknavbarTheme(Request $request)
    {
        $validator = validator::make($request->all(),[

            'link' => 'required',
            'type' => 'required',

        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'validation_errors'=>$validator->getMessageBag(),
            ]);

        }else{

            $Link = Link::create([
                'link' => $request->link,
                'type' => $request->type,
                'web_sites_id' => $request->web_sites_id,
            ]);

            // هذه الطريقه نفس التي بي الاعلى
          /*
            $Navbar = new Navbar();
            $Navbar->link = $request->input('new link');
            $Navbar->type = $request->input('link');
            $Navbar->save();

          */

            return response()->json([
                'status'=>200,
                'link'=>$Link,
                'message'=>'addlinknavbar successfully',
            ]);

        }

    }

   /* public function EuditNavbarTheme(Request $request, $id)
    {

        $Navbar = Navbar::find($id);
        if($Navbar){

            return response()->json([
                'status'=>200,
                'Navbar'=>$Navbar,
                'message'=>' updateNavbar successfully ',
            ]);
        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Invalid updated ',
            ]);
        }

    }*/
    public function updateNavbarTheme(Request $request, $id)
    {
        $validator = validator::make($request->all(),[

            'link' => 'required',

        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>422,
                'validation_errors'=>$validator->getMessageBag(),
            ]);

        }else
        {

            $Link = Link::find($id);
            if($Link)
            {
                $Link->link = $request->link;
                //$Link->save();
                $Link->update();

                return response()->json([
                    'status'=>200,
                    'Link'=>$Link,
                    'message'=>' updateNavbar successfully ',
                ]);
            }else{
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid updated ',
                ]);
            }
        }

    }

    public function deleteNavbarTheme($id)
    {
        $Link = Link::find($id);
        if($Link)
        {
            $Link->delete();

            return response()->json([
                'status'=>200,
                'Link'=>$Link,
                'message'=>' deleteNavbar successfully ',
            ]);
        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Invalid delete ',
            ]);
        }

    }



}
