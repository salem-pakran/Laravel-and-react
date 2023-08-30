<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Web_site extends Model
{
    use HasFactory;

    protected $table  = 'web_sites';
    protected $fillable =['user_id','theme_id','navbar_id'];
/*
    public function us_th_na(){
        return $this->hasOne('App\Models\User');
        return $this->hasOne('App\Models\Theme');
        return $this->hasOne('App\Models\Navbar');
    }
    */
    //many to one
    public function link(){
        return $this->hasMany(related:'App\Models\Link' , foreignKey:'web_sites_id');
    }


}

