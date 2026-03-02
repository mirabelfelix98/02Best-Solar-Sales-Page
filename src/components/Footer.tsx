export default function Footer() {
  return (
    <footer className="bg-deep-blue text-gray-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">02Best Solar Enterprise</h3>
        <p className="mb-8 max-w-md mx-auto">
          Providing reliable solar solutions for Nigerian homes and businesses. Say goodbye to generator noise.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-solar-yellow transition-colors">Services</a>
          <a href="#" className="hover:text-solar-yellow transition-colors">Contact</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} 02Best Solar Enterprise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
