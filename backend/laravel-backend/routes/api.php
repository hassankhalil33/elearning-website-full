<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::get("/students", [ApiController::class, "students"])->name("students");
Route::get("/teachers", [ApiController::class, "teachers"])->name("teachers");
Route::get("/announcements", [ApiController::class, "announcements"])->name("announcements");
Route::get("/courses", [ApiController::class, "courses"])->name("courses");
Route::get("/admins", [ApiController::class, "admins"])->name("admins");
