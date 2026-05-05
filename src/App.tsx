import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  Edit3, 
  Trash2, 
  XOctagon, 
  Lock, 
  UserCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Database,
  Info
} from 'lucide-react';

const App = () => {
  const [activeArco, setActiveArco] = useState<number | null>(null);

  const arcoRights = [
    {
      id: 1,
      title: 'Acceso',
      icon: <Search className="w-8 h-8 text-blue-500" />,
      description: 'Derecho a solicitar y obtener confirmación sobre si tus datos están siendo tratados, cuáles son y para qué se usan.',
      color: 'bg-blue-50 border-blue-200 hover:border-blue-500'
    },
    {
      id: 2,
      title: 'Rectificación',
      icon: <Edit3 className="w-8 h-8 text-green-500" />,
      description: 'Derecho a pedir que se modifiquen tus datos si son inexactos, están desactualizados o incompletos.',
      color: 'bg-green-50 border-green-200 hover:border-green-500'
    },
    {
      id: 3,
      title: 'Cancelación',
      icon: <Trash2 className="w-8 h-8 text-red-500" />,
      description: 'Derecho a solicitar la eliminación de tus datos cuando ya no sean necesarios para el fin que fueron recolectados.',
      color: 'bg-red-50 border-red-200 hover:border-red-500'
    },
    {
      id: 4,
      title: 'Oposición / Bloqueo',
      icon: <XOctagon className="w-8 h-8 text-purple-500" />,
      description: 'Derecho a pedir que se suspenda el uso de tus datos temporalmente o a negarte a un tratamiento específico.',
      color: 'bg-purple-50 border-purple-200 hover:border-purple-500'
    }
  ];

  const principles = [
    { title: 'Licitud y Lealtad', desc: 'Los datos deben tratarse de forma legal y transparente.', icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
    { title: 'Finalidad', desc: 'Solo pueden usarse para el propósito explícito informado.', icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
    { title: 'Proporcionalidad', desc: 'Solo se deben pedir los datos estrictamente necesarios.', icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
    { title: 'Calidad', desc: 'Deben ser exactos, completos y actualizados.', icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
    { title: 'Seguridad', desc: 'Se deben proteger contra pérdida, filtración o acceso no autorizado.', icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-blue-300 mr-3" />
            <span className="text-blue-200 font-semibold tracking-wider text-sm uppercase">Creado por prfe Rubén</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Ley de Protección de <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">Datos Personales</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto">
            Ley N° 19.628 sobre la Protección de la Vida Privada. Todo lo que necesitas saber de forma simple y visual.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 -mt-12 relative z-20 space-y-12">
        
        {/* Intro Card */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100 transform transition hover:-translate-y-1 duration-300">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-indigo-600" />
                ¿Qué es esta ley?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Es la normativa en Chile que regula cómo las empresas, instituciones y personas deben manejar, almacenar y utilizar los datos personales de terceros. Su objetivo principal es <strong>proteger la privacidad</strong> y asegurar que tú tengas control sobre tu información.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
              <UserCheck className="w-12 h-12 mx-auto text-indigo-500 mb-3" />
              <h3 className="font-semibold text-indigo-900">El Titular</h3>
              <p className="text-sm text-indigo-700 mt-2">Eres TÚ. El dueño de los datos personales siempre es la persona natural a la que se refieren.</p>
            </div>
          </div>
        </section>

        {/* Derechos ARCO Section */}
        <section className="pt-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Tus Derechos ARCO</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              La ley te otorga herramientas fundamentales para mantener el control sobre tu información en cualquier base de datos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arcoRights.map((right) => (
              <div 
                key={right.id}
                onMouseEnter={() => setActiveArco(right.id)}
                onMouseLeave={() => setActiveArco(null)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${right.color} ${activeArco === right.id ? 'shadow-lg scale-[1.02]' : 'shadow-sm'}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {right.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{right.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{right.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Datos Sensibles vs Normales */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="bg-white rounded-3xl shadow-md p-8 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Info className="w-6 h-6 mr-2 text-blue-500" />
              Datos Personales
            </h3>
            <p className="text-slate-600 mb-4">Cualquier información que permita identificar a una persona natural.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 bg-slate-50 p-2 rounded-lg"><span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>RUT / Nombre completo</li>
              <li className="flex items-center text-slate-700 bg-slate-50 p-2 rounded-lg"><span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>Dirección particular</li>
              <li className="flex items-center text-slate-700 bg-slate-50 p-2 rounded-lg"><span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>Teléfono personal / Correo</li>
            </ul>
          </div>

          <div className="bg-rose-50 rounded-3xl shadow-md p-8 border border-rose-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-rose-500" />
              Datos Sensibles
            </h3>
            <p className="text-rose-700 mb-4">Información muy íntima. <strong>No pueden ser tratados</strong>, salvo que la ley lo autorice o des consentimiento expreso.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-rose-800 bg-white/50 p-2 rounded-lg"><span className="w-2 h-2 rounded-full bg-rose-400 mr-3"></span>Salud física o mental</li>
              <li className="flex items-center text-rose-800 bg-white/50 p-2 rounded-lg"><span className="w-2 h-2 rounded-full bg-rose-400 mr-3"></span>Origen racial o étnico</li>
              <li className="flex items-center text-rose-800 bg-white/50 p-2 rounded-lg"><span className="w-2 h-2 rounded-full bg-rose-400 mr-3"></span>Ideología, creencias o religión</li>
            </ul>
          </div>
        </section>

        {/* Principios Section */}
        <section className="bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white mt-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 opacity-10">
            <Lock className="w-96 h-96 text-white" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Principios del Tratamiento de Datos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="flex items-center mb-3">
                    {principle.icon}
                    <h4 className="ml-3 font-bold text-lg">{principle.title}</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 text-center px-6 border-t border-slate-200 pt-8">
        <p className="text-slate-500 text-sm">
          Infografía de carácter educativo basada en la Ley N° 19.628 de la República de Chile. 
          <br/> Actualmente en proceso de actualización legal en el Congreso (Proyecto que crea la Agencia de Protección de Datos).
        </p>
      </footer>
    </div>
  );
};

export default App;