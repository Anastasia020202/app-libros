<template>
  <v-container>
    <h2 class="text-h5 mb-4">➕ Añadir Libro</h2>

    <v-text-field v-model="titulo" label="Título" />
    <v-text-field v-model="autor" label="Autor" />
    <v-text-field v-model="año" label="Año" type="number" />

    <v-btn class="mt-3" color="primary" @click="guardarLibro">
      Guardar libro
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBookStore } from '../store/bookStore'

const bookStore = useBookStore()

const titulo = ref('')
const autor = ref('')
const año = ref(new Date().getFullYear())

function guardarLibro() {
  if (titulo.value && autor.value && año.value) {
    bookStore.añadirLibro({
      id: Date.now(),
      titulo: titulo.value,
      autor: autor.value,
      año: Number(año.value),
    })

    titulo.value = ''
    autor.value = ''
    año.value = new Date().getFullYear()
  }
}
console.log('AddBook.vue montado')

</script>
