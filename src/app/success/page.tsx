import Link from 'next/link'; 
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/success.webp"
        alt="Success Image"
        fill
        className="object-cover z-0"
        priority
      />  
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="bg-black/70 p-10 rounded-2xl text-center max-w-lg text-white shadow-lg">
          <h1 className="text-4xl  font-bold mb-4">✅ Success!</h1>
          <p className="text-lg mb-6">Your Information has been submitted successfully.</p>
          <p className="text-lg mb-6">You will be contacted Soon.</p>
          
          <Link 
            href="/" 
            className="px-6 py-3 bg-green-500 rounded-lg text-white hover:bg-green-600 transition"
          >
            Go Back Home
          </Link>
        </div>            
      </div>
    </div>
  );
}
