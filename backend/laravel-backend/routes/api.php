<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/students", [ApiController::class, "students"])->name("students");
Route::post("/teachers", [ApiController::class, "teachers"])->name("teachers");
Route::post("/announcements", [ApiController::class, "announcements"])->name("announcements");
Route::post("/courses", [ApiController::class, "courses"])->name("courses");
