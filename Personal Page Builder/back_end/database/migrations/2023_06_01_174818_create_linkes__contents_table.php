<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinkesContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linkes__contents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('desc');
            $table->foreignId('linkes_id');
            $table->text('para');
            $table->text('icons');
            $table->string('href_icons');
            $table->string('ariaLabel');
            $table->string('position');
            $table->string('work');
            $table->date('date');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('linkes__contents');
    }
}
