
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <div className="bakery-pattern flex-grow flex flex-col items-center justify-center p-6 sm:p-10">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bakery-800 mb-6">
              Bem-vindo à <span className="text-bakery-600">Padoca</span>
            </h1>
            <p className="text-xl text-bakery-700 mb-8 max-w-2xl mx-auto">
              Sistema de gestão de estoque para a sua padaria favorita. 
              Controle com facilidade todos os produtos disponíveis.
            </p>
            
            <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="bg-bakery-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-bakery-600">📋</span>
                  </div>
                  <h3 className="text-lg font-medium text-bakery-800 mb-2">Controle de Estoque</h3>
                  <p className="text-bakery-600">Monitore todos os produtos da padaria em tempo real</p>
                </div>
                
                <div className="p-4">
                  <div className="bg-bakery-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-bakery-600">➕</span>
                  </div>
                  <h3 className="text-lg font-medium text-bakery-800 mb-2">Adicionar Itens</h3>
                  <p className="text-bakery-600">Cadastre novos produtos com facilidade</p>
                </div>
                
                <div className="p-4">
                  <div className="bg-bakery-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-bakery-600">🔄</span>
                  </div>
                  <h3 className="text-lg font-medium text-bakery-800 mb-2">Atualização Rápida</h3>
                  <p className="text-bakery-600">Atualize quantidades de produtos com um clique</p>
                </div>
              </div>
            </div>
            
            <Link to="/inventory">
              <Button className="bg-bakery-500 hover:bg-bakery-600 text-lg px-8 py-6">
                Gerenciar Estoque
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-bakery-800 text-bakery-100 py-4 text-center text-sm">
        <p>Padoca - Sistema de Gestão de Estoque para Padarias © 2025</p>
      </footer>
    </div>
  );
};

export default Index;
