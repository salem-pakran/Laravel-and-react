<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeWebSite extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('web_sites', function (Blueprint $table) {
            $table->foreignId('user_id')->references('id')->on('users')->change();
            $table->foreignId('theme_id')->references('id')->on('themes')->change();
            $table->foreignId('navbar_id')->references('id')->on('navbars')->change();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
