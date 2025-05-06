
import React, { useState } from 'react';
import { useInventory, BakeryItem } from '@/context/InventoryContext';
import Navbar from '@/components/Navbar';
import BakeryItemCard from '@/components/BakeryItemCard';
import AddItemForm from '@/components/AddItemForm';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const Inventory = () => {
  const { items } = useInventory();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Extract unique categories from items
  const categories = ['all', ...new Set(items.map(item => item.category))];

  // Filter items based on search term and category
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow p-6 bg-bakery-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h1 className="text-3xl font-bold text-bakery-800 mb-4 sm:mb-0">Estoque da Padaria</h1>
            <AddItemForm />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <Label htmlFor="search" className="text-sm font-medium mb-1 block">Buscar</Label>
                <Input
                  id="search"
                  placeholder="Buscar por nome ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-sm font-medium mb-1 block">Filtrar por Categoria</Label>
                <Select 
                  value={categoryFilter}
                  onValueChange={(value) => setCategoryFilter(value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Todas as categorias" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'Todas as categorias' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item: BakeryItem) => (
                <BakeryItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-lg">
              <p className="text-lg text-gray-500">
                Nenhum item encontrado. Tente ajustar sua busca ou adicione novos produtos.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-bakery-800 text-bakery-100 py-4 text-center text-sm">
        <p>Padoca - Sistema de Gestão de Estoque para Padarias © 2025</p>
      </footer>
    </div>
  );
};

export default Inventory;
