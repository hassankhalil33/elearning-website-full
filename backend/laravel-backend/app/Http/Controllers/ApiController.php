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

        foreach($teachers as $teacher) {
            $teacher["course"] = $teacher["course"]["name"];
        }

        return response()->json([
            "status" => "success",
            "message" => $teachers
        ]);
    }

    public function announcements() {
        $announcements = Teacher::get(["announcements"]);

        return response()->json([
            "status" => "success",
            "message" => $announcements
        ]);
    }

    public function courses() {
        $courses = Teacher::get(["course"]);
        $i=0;

        foreach($courses as $course) {
            $courses[$i] = $course["course"];
            $i++;
        }

        return response()->json([
            "status" => "success",
            "message" => $courses
        ]);
    }
}
