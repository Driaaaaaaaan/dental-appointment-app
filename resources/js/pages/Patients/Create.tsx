
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';





const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Patients',
        href: '/patients/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Patients" />
            <div className='w-full p-8 md:w-3/8'>
                <form>
                <div className='mb-4'>
                <Label htmlFor="Fname">First Name</Label>
                <Input placeholder='Input your first name...'></Input>
                </div>
                <div className='mb-4'  >
                <Label htmlFor="Mname">Middle Name</Label>
                <Input placeholder='Input your middle name...'></Input>
                </div>
                <div className='mb-4'>
                <Label htmlFor="Lname">Last Name</Label>
                <Input placeholder='Input your last name...'></Input>
                </div>
            </form>
            </div>
        </AppLayout>
    );
}
