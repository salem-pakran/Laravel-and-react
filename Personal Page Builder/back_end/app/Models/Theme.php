<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;
    protected $table  = 'themes';
    protected $fillable =['ThemeName','image','decs'];


    public function web_site(){
        return $this->hasMany(related:'App\Models\Web_sites',foreignKey:'theme_id');
    }
}
