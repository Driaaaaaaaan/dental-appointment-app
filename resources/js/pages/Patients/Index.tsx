import { Button } from '@/components/ui/button'
import AppLayout from '@/layouts/app-layout'
import { type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { route } from 'ziggy-js'
import { UserPlus } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Patients',
    href: '/patients',
  },
]

export default function Index() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Patients" />

      {/* Container */}
      <div className="p-8">
        
        {/* Header above table */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Patients</h1>

          <Link href={route('patients.create')}>
            <Button className="bg-green-600 hover:bg-green-900 dark:text-white">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Patient
            </Button>
          </Link>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableCaption>List of patients</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Contact No.</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Mark Adrian Cale</TableCell>
                <TableCell>25</TableCell>
                <TableCell>Male</TableCell>
                <TableCell>09123456789</TableCell>
                <TableCell>markadriancale@gmail.com</TableCell>
                <TableCell>123 Main Street, City, Country</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm" className="ml-2">Delete</Button>
                  <Button variant="secondary" size="sm" className="ml-2">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>                                                                                                                           
            <Pagination>                                                  
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                    </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
      </Pagination>
        </div>

      </div>
    </AppLayout>
  )
}
