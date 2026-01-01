"use client"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import provinces from "@/data/province.json"
import cities from "@/data/city.json"
import barangays from "@/data/barangay.json"
import { useState } from "react"



function formatDate(date: Date | undefined) {
    if (!date) {
    return ""
    }
    return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    })
}
function isValidDate(date: Date | undefined) {
    if (!date) {
    return false
    }
    return !isNaN(date.getTime())
    }




const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add New Patient',
        href: '/patients/create',
    },
];

export default function Index() {

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
    )
    const [month, setMonth] = React.useState<Date | undefined>(date)
    const [value, setValue] = React.useState(formatDate(date))

    const [provinceCode, setProvinceCode] = useState("")
    const [cityCode, setCityCode] = useState("")
    const [barangayCode, setBarangayCode] = useState("")


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Patients" />
            <div className='w-full p-8 md:w-10/12'>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <div className='mb-4'>
                                <Label htmlFor="Fname">First Name</Label>
                                <Input placeholder='Input your first name...'></Input>
                            </div>
                            <div className='mb-4'>
                                <Label htmlFor="Mname">Middle Name</Label>
                                <Input placeholder='Input your middle name...'></Input>
                            </div>
                            <div className='mb-4'>
                                <Label htmlFor="Lname">Last Name</Label>
                                <Input placeholder='Input your last name...'></Input>
                            </div>
                            <div className='mb-4'>
                                <Label htmlFor="Suffix">Suffix</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Enter suffix" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value=" ">None</SelectItem>
                                        <SelectItem value="Jr.">Jr.</SelectItem>
                                        <SelectItem value="Jra.">Jra.</SelectItem>
                                        <SelectItem value="Sr.">Sr.</SelectItem>
                                        <SelectItem value="III">III</SelectItem>
                                        <SelectItem value="IV">IV</SelectItem>
                                        <SelectItem value="V">V</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="date">Birth Date</Label>
                                <div className="relative flex gap-2">
                                    <Input
                                        id="date"
                                        value={value}
                                        placeholder="Enter you birth date..."
                                        className="bg-background pr-10"
                                        onChange={(e) => {
                                            const date = new Date(e.target.value)
                                            setValue(e.target.value)
                                            if (isValidDate(date)) {
                                                setDate(date)
                                                setMonth(date)
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "ArrowDown") {
                                                e.preventDefault()
                                                setOpen(true)
                                            }
                                        }}
                                    />
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                id="date-picker"
                                                variant="ghost"
                                                className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                            >
                                                <CalendarIcon className="size-3.5" />
                                                <span className="sr-only">Select date</span>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto overflow-hidden p-0"
                                            align="end"
                                            alignOffset={-8}
                                            sideOffset={10}
                                        >
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                captionLayout="dropdown"
                                                month={month}
                                                onMonthChange={setMonth}
                                                onSelect={(date) => {
                                                    setDate(date)
                                                    setValue(formatDate(date))
                                                    setOpen(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className='mb-4'>
                                <Label htmlFor="Contact">Contact Number</Label>
                                <Input placeholder='Input your contact number...'></Input>
                            </div>
                            <div className='mb-4'>
                                <Label htmlFor="email">Email</Label>
                                <Input placeholder='Input your email address...'></Input>
                            </div>
                            <div className='mb-4'>
                                <Label htmlFor="password">Password</Label>
                                <Input placeholder='Input your password...'></Input>
                            </div>
                            <div className='mb-4'>
                                <Label htmlFor="Age">Age</Label>
                                <Input></Input>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
    <Label>Province</Label>
    <Select
        value={provinceCode}
        onValueChange={(value) => {
            setProvinceCode(value)
            setCityCode("")
            setBarangayCode("")
        }}
    >
        <SelectTrigger>
            <SelectValue placeholder="Select province" />
        </SelectTrigger>
        <SelectContent>
            {provinces.map((prov: any) => (
                <SelectItem key={prov.province_code} value={prov.province_code}>
                    {prov.province_name}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
</div>
                            

                            <div className="mb-4">
    <Label>Municipality / City</Label>
    <Select
        value={cityCode}
        onValueChange={(value) => {
            setCityCode(value)
            setBarangayCode("")
        }}
        disabled={!provinceCode}
    >
        <SelectTrigger>
            <SelectValue placeholder="Select municipality" />
        </SelectTrigger>
        <SelectContent>
            {cities
                .filter((city: any) => city.province_code === provinceCode)
                .map((city: any) => (
                    <SelectItem key={city.city_code} value={city.city_code}>
                        {city.city_name}
                    </SelectItem>
                ))}
        </SelectContent>
    </Select>
</div>
<div className="mb-4">
    <Label>Barangay</Label>
    <Select
        value={barangayCode}
        onValueChange={setBarangayCode}
        disabled={!cityCode}
    >
        <SelectTrigger>
            <SelectValue placeholder="Select barangay" />
        </SelectTrigger>
        <SelectContent>
            {barangays
                .filter((brgy: any) => brgy.city_code === cityCode)
                .map((brgy: any) => (
                    <SelectItem key={brgy.brgy_code} value={brgy.brgy_code}>
                        {brgy.brgy_name}
                    </SelectItem>
                ))}
        </SelectContent>
    </Select>
</div>
                            <div className='mb-4'>
                                <Label htmlFor="Gender">Gender</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Enter gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                        <div className="flex justify-center md:justify-end">
                            <Button className='bg-green-600 hover:bg-green-900 dark:text-white mt-4 w-32'>Add</Button>
                        </div>
                </form>
            </div>
        </AppLayout>
    );
}
