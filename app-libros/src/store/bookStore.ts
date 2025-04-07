import { defineStore } from 'pinia'

export interface Libro {
  id: number
  titulo: string
  autor: string
  año: number
}

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    libros: [] as Libro[],
  }),
  actions: {
    cargarLibros() {
      this.libros = [
        { id: 1, titulo: '1984', autor: 'George Orwell', año: 1949 },
        { id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
        { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605 },
      ]
    },
    añadirLibro(libro: Libro) {
      this.libros.push(libro)
    },
    eliminarLibro(id: number) {
      this.libros = this.libros.filter(libro => libro.id !== id)
    },
  },
})
