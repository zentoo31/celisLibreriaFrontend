import { Component } from '@angular/core';
import { InterfaceProducts } from './interface-products';

@Component({
  selector: 'app-manage-inventory',
  standalone: true,
  imports: [],
  templateUrl: './manage-inventory.component.html',
  styleUrl: './manage-inventory.component.css'
})
export class ManageInventoryComponent {
  productsList: InterfaceProducts[] = [
    { nombre: 'Cuaderno A4', descripcion: 'Cuaderno de hojas rayadas, tamaño A4', precio: 5.50, stock: 120 },
    { nombre: 'Bolígrafo azul', descripcion: 'Bolígrafo de tinta azul, punta fina', precio: 0.80, stock: 500 },
    { nombre: 'Carpeta archivadora', descripcion: 'Carpeta con anillas para documentos A4', precio: 3.20, stock: 75 },
    { nombre: 'Goma de borrar', descripcion: 'Goma de borrar para lápiz, sin manchas', precio: 0.50, stock: 300 },
    { nombre: 'Lápiz HB', descripcion: 'Lápiz de grafito HB', precio: 0.60, stock: 400 },
    { nombre: 'Resaltador amarillo', descripcion: 'Resaltador color amarillo fluorescente', precio: 1.50, stock: 200 },
    { nombre: 'Regla 30 cm', descripcion: 'Regla transparente de 30 centímetros', precio: 1.00, stock: 150 },
    { nombre: 'Tijeras escolares', descripcion: 'Tijeras con punta redonda, 15 cm', precio: 2.00, stock: 90 },
    { nombre: 'Pegamento en barra', descripcion: 'Pegamento en barra de 21 gramos', precio: 1.20, stock: 180 },
    { nombre: 'Estuche para lápices', descripcion: 'Estuche con cierre para lápices y bolígrafos', precio: 4.50, stock: 60 },
    { nombre: 'Bloc de notas adhesivas', descripcion: 'Bloc de notas adhesivas, 100 hojas', precio: 2.00, stock: 130 },
    { nombre: 'Marcadores permanentes', descripcion: 'Marcadores de tinta permanente, varios colores', precio: 3.00, stock: 85 },
    { nombre: 'Corrector líquido', descripcion: 'Corrector líquido de secado rápido', precio: 1.70, stock: 140 },
    { nombre: 'Archivador de anillas', descripcion: 'Archivador tamaño A4 con 4 anillas', precio: 4.00, stock: 55 },
    { nombre: 'Papel A4', descripcion: 'Resma de papel A4, 500 hojas', precio: 6.50, stock: 70 },
    { nombre: 'Tijeras escolares', descripcion: 'Tijeras con punta redonda, 15 cm', precio: 2.00, stock: 90 },
    { nombre: 'Pegamento en barra', descripcion: 'Pegamento en barra de 21 gramos', precio: 1.20, stock: 180 },
    { nombre: 'Estuche para lápices', descripcion: 'Estuche con cierre para lápices y bolígrafos', precio: 4.50, stock: 60 },
    { nombre: 'Bloc de notas adhesivas', descripcion: 'Bloc de notas adhesivas, 100 hojas', precio: 2.00, stock: 130 },
    { nombre: 'Marcadores permanentes', descripcion: 'Marcadores de tinta permanente, varios colores', precio: 3.00, stock: 85 },
    { nombre: 'Corrector líquido', descripcion: 'Corrector líquido de secado rápido', precio: 1.70, stock: 140 },
    { nombre: 'Archivador de anillas', descripcion: 'Archivador tamaño A4 con 4 anillas', precio: 4.00, stock: 55 },
    { nombre: 'Papel A4', descripcion: 'Resma de papel A4, 500 hojas', precio: 6.50, stock: 70 }
  ];

}
