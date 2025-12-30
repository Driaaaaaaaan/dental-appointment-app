<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('patients', [\App\Http\Controllers\PatientController::class, 'index'])->name('patients.index');
    Route::get('patients/create', [\App\Http\Controllers\PatientController::class, 'create'])->name('patients.create');
});

require __DIR__.'/settings.php';
