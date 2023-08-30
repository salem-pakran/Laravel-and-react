<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    use HasFactory;
    protected $table  = 'links';
    protected $fillable =['link','web_sites_id','type'];
    /*
    public function web_site(){
        return $this->belongsTo('App\Models\Web_site','web_site_id','id');
    }
    */


    public function web_site(){
        return $this->belongsToMany('App\Models\Web_site');
    }

    public function linkes_content(){
        return $this->hasOne(related:'App\Models\Linkes_Content',foreignKey:'linkes_id');
    }
}
