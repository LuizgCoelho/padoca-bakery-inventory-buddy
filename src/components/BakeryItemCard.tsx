
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BakeryItem, useInventory } from '@/context/InventoryContext';
import { Trash } from 'lucide-react';

interface BakeryItemCardProps {
  item: BakeryItem;
}

const BakeryItemCard: React.FC<BakeryItemCardProps> = ({ item }) => {
  const { removeItem, updateQuantity } = useInventory();

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 0) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <Card className="overflow-hidden border-bakery-100 hover:border-bakery-200 transition-all">
      <div className="bg-bakery-50 p-4">
        <h3 className="text-lg font-medium text-bakery-900">{item.name}</h3>
        <p className="text-sm text-bakery-700 mt-1">{item.description}</p>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-bakery-700">Categoria:</span>
          <span className="text-sm text-bakery-600">{item.category}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-bakery-700">Quantidade:</span>
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full" 
              onClick={handleDecreaseQuantity}
            >
              -
            </Button>
            <span className="mx-3 text-lg font-bold text-bakery-900">
              {item.quantity}
            </span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full" 
              onClick={handleIncreaseQuantity}
            >
              +
            </Button>
          </div>
        </div>
        <div className="text-sm text-bakery-600 mt-1 text-right">
          {item.unit}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Button 
          variant="destructive" 
          size="sm" 
          className="text-xs" 
          onClick={handleRemove}
        >
          <Trash className="h-4 w-4 mr-1" />
          Remover
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BakeryItemCard;
