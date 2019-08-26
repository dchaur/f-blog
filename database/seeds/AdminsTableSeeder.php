<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the admins seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::collection('admins')->delete();

        DB::collection('admins')->insert([
            'username' => 'fadmin',
            'email' => 'admin@fblog.com',
            'email_verification_date' => '',
            'password' => bcrypt('password')
        ]);
    }
}
