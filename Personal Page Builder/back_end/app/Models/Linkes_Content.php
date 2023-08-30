<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Linkes_Content extends Model
{
    use HasFactory;

    protected $table  = 'linkes__contents';
    protected $fillable =['linkes_id','title','desc','para','icons','href_icons','ariaLabel','position','work','date','image','image_path'];

    public function link(){
        return $this->belongsToMany('App\Models\Link');
    }

}
