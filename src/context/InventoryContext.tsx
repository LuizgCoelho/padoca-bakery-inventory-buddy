
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';

export interface BakeryItem {
  id: string;
  name: string;
  description: string;
  category: string; 
  quantity: number;
  unit: string;
  imageUrl?: string;
}

interface InventoryContextType {
  items: BakeryItem[];
  addItem: (item: Omit<BakeryItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  getItemById: (id: string) => BakeryItem | undefined;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

// Sample initial inventory data
const initialInventory: BakeryItem[] = [
  {
    id: '1',
    name: 'Pão Francês',
    description: 'Pão tradicional e crocante',
    category: 'Pães',
    quantity: 50,
    unit: 'unidades'
  },
  {
    id: '2',
    name: 'Bolo de Chocolate',
    description: 'Bolo caseiro com cobertura de brigadeiro',
    category: 'Bolos',
    quantity: 5,
    unit: 'unidades'
  },
  {
    id: '3',
    name: 'Croissant',
    description: 'Croissant de massa folhada',
    category: 'Pães',
    quantity: 15,
    unit: 'unidades'
  },
  {
    id: '4',
    name: 'Coxinha',
    description: 'Salgado recheado com frango',
    category: 'Salgados',
    quantity: 25,
    unit: 'unidades'
  }
];

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<BakeryItem[]>(initialInventory);
  const { toast } = useToast();

  const addItem = (item: Omit<BakeryItem, 'id'>) => {
    const newItem = {
      ...item,
      id: Date.now().toString()
    };
    
    setItems(prevItems => [...prevItems, newItem]);
    toast({
      title: 'Item adicionado',
      description: `${newItem.name} foi adicionado ao estoque`,
    });
  };

  const removeItem = (id: string) => {
    const itemToRemove = items.find(item => item.id === id);
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    
    if (itemToRemove) {
      toast({
        title: 'Item removido',
        description: `${itemToRemove.name} foi removido do estoque`,
      });
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    
    const updatedItem = items.find(item => item.id === id);
    if (updatedItem) {
      toast({
        title: 'Quantidade atualizada',
        description: `${updatedItem.name} agora tem ${newQuantity} ${updatedItem.unit}`,
      });
    }
  };

  const getItemById = (id: string) => {
    return items.find(item => item.id === id);
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, removeItem, updateQuantity, getItemById }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};
