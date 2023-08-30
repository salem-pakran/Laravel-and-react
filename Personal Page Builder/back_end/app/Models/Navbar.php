<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Navbar extends Model
{
    use HasFactory;
    protected $table  = 'navbars';
    protected $fillable =['navbarName','decs'];



    public function web_site(){
        return $this->hasMany(related:'App\Models\Web_sites',foreignKey:'navbar_id');
    }

}
