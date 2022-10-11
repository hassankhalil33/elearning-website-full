<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;
use App\Models\Teacher;

class ApiController extends Controller {
    
    public function students() {
        $students = User::get();

        return response()->json([
            "status" => "success",
            "message" => $students 
        ]);
    }

    public function admins() {
        $admins = Admin::get();

        return response()->json([
            "status" => "success",
            "message" => $admins
        ]);
    }

    public function teachers() {
        $teachers = Teacher::get();

        return response()->json([
            "status" => "success",
            "message" => $teachers
        ]);
    }

    public function announcements() {
        
    }

    public function courses() {
        $courses = Teacher::get(["course"]);

        return response()->json([
            "status" => "success",
            "message" => $courses
        ]);
    }
}
