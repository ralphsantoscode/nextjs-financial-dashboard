import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <p className="mt-4 text-gray-500">
        This is the invoices page. You can add invoice management functionality here.
      </p>
    </div>
  );
}
