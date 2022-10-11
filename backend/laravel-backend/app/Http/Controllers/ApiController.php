<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller {
    
    public function students() {
        $students = User::get();

        return response()->json([
            "status" => "success",
            "message" => $students 
        ]);
    }

    public function admins() {
        $students = User::get();

        return response()->json([
            "status" => "success",
            "message" => $students 
        ]);
    }

    public function teachers() {
        
    }

    public function announcements() {
        
    }

    public function courses() {
        
    }
}
