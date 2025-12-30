
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link,} from '@inertiajs/react';
import { route } from 'ziggy-js';
import { UserPlus } from 'lucide-react';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Patients',
        href: '/patients',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Patients" />
            <div className="p-8 flex justify-end">
                <Link href={route('patients.create')}><Button className='bg-green-600 hover:bg-green-900 dark:text-white'><UserPlus />Add Patient</Button></Link>

                
            </div>
        </AppLayout>
    );
}
