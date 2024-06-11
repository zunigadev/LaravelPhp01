<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function getUserProfile($id)
    {
        return User::find($id);
    }
}