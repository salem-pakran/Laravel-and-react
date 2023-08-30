<?php

namespace App\Http\Controllers\Api;
use App\Helpers\UploadHelper;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Link;
use App\Models\Linkes_Content;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use NunoMaduro\Collision\Contracts\Adapters\Phpunit\HasPrintableTestCaseName;

class headerThemeSliceController extends Controller
{
    public function fatchLinkes_Content()
    {

        $Home= Linkes_Content::where( 'linkes_id' , 1)->get();
        $Services=Linkes_Content::where('linkes_id' , 2)->get();
        $Portfolio=Linkes_Content::where('linkes_id', 3)->get();
        $News=Linkes_Content::where('linkes_id' , 4)->get();
        return response()->json([
            'status'=>200,
            'Home' => $Home,
            'Services' => $Services,
            'Portfolio' => $Portfolio,
            'News' => $News,
            'message'=>'fatchLinkes_Content successfully',

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
    public function addLinkes_Content(Request $request)
    {
        $validator = validator::make($request->all(),[

            //'linkes_id' => 'required',

        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'validation_errors'=>$validator->getMessageBag(),
            ]);

        }else{

            $Linkes_Content = Linkes_Content::create([

                'title' => $request->title,
                'desc' => $request->desc,
                'linkes_id' => $request->linkes_id,
                //'linkes_id' => $request->linkes_id,
                'paragrah' => $request->paragrah,
                'position' => $request->position,
                'work' => $request->work,
                //'date' => تلقائيا يتم اضافته
                'ariaLabel' => $request->ariaLabel,
                'icons' => $request->icons,
                'para' => $request->para,

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
                'Linkes_Content' => $Linkes_Content,
                'message'=>'addLinkes_Content successfully',
            ]);

        }

    }


    public function updateLinkes_Content(Request $request, $id)
    {

        $validator = validator::make($request->all(),[

            //'title' => 'required',
            //'image' => 'required|max:1999'


        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>422,
                'validation_errors'=>$validator->getMessageBag(),
            ]);

        }else
        {

            $Linkes_Content = Linkes_Content::find($id);
            if($Linkes_Content)
            {
                $Linkes_Content->fill($request->post())->update();
                $Linkes_Content->update();



 /*
                    //file real name
                    $Name = $request->image->hasName();
                    //file type
                    $extension = $request->image->extension();
                    //image name
                    $imageName = $Name.'.'.$extension;
                    Storage::disk('public')->put($imageName, file_get_contents($request->image));
                       $Linkes_Content->image = $imageName;
                        $Linkes_Content->save();



                    $file = $request->file('image');
                    //$imageName = time().'.'.$request->image->getPathName();
                    $$imageName= mime_content_type($file->getPathName());
                    //store in storage folder
                    //$request->image->move(public_path('images'), $imageName);
                    //store in storage folder
                    $request->image->storeAs('images', $imageName);
                    $Linkes_Content->image = $imageName;
*/
                return response()->json([
                    'status'=>200,
                    'linkes_content'=>$Linkes_Content,
                    //'file' => $file,
                    'message'=>' updateLinkes_Content successfully ',
                ]);
            }else{
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid updateLinkes_Content ',
                ]);
            }
        }

    }

    public function deleteLinkes_Content($id)
    {
        $Linkes_Content = Linkes_Content::find($id);
        if($Linkes_Content)
        {
            $Linkes_Content->delete();

            return response()->json([
                'status'=>200,
                'Linkes_Content'=>$Linkes_Content,
                'message'=>' deleteLinkes_Content successfully ',
            ]);
        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Invalid deleteLinkes_Content ',
            ]);
        }

    }





    public function uploade(Request $request )
    {
/*
                $image=$request->file('image');
                $extension=$image->getClientOriginalExtension();
                $imagename=rand(100,100000).'.'.$extension;
                $directory='public/';
                $imageurl = $directory.$imagename;
                Image::make($image)->save($imageurl);
                return $imageurl;
*/
            if($request->hasFile('image')){
                $file=$request->file('image');
                $extension=$file->getClientOriginalExtension();
                $filename=time().'.'.$extension;
                $path='theme/images/';
                $request -> image -> move($path, $filename);

            }
    }




}
