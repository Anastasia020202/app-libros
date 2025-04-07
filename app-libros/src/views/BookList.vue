<template>
    <v-container>
      <h2 class="text-h5 mb-4">Lista de Libros</h2>
  
      <v-list>
        <v-list-item
          v-for="libro in bookStore.libros"
          :key="libro.id"
        >
          <v-list-item-content>
            <v-list-item-title>{{ libro.titulo }}</v-list-item-title>
            <v-list-item-subtitle>{{ libro.autor }} ({{ libro.año }})</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { useBookStore } from '../store/bookStore'
  const bookStore = useBookStore()
  bookStore.cargarLibros()
  </script>
  