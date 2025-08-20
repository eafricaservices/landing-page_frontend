import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} 
    >
      <div className="bg-black/50 p-8 rounded-xl text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">✅ Success!</h1>
        <p className="text-lg mb-6">Your form has been submitted successfully.</p>
        
        <Link 
          href="/" 
          className="px-6 py-3 bg-green-500 rounded-lg text-white hover:bg-green-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
