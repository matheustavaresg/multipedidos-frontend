<template>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-400 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>
     
    <form class="space-y-6" @submit.prevent="saveItem">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Items</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Add Item</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div class="mt-2">
                            <input v-model="form.name" id="name" name="name" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div class="mt-2">
                            <input v-model="form.price" id="price" name="price" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <a class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600" @click="$router.go(-1)">Voltar</a>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </form>

</template>
     
    <script setup>
    import useItems from '../../composables/items'
    
    import { reactive, onMounted, ref } from 'vue';
    
    const { errors, storeItem, items, getItems } = useItems()
    
    
    import { v4 as uuidv4 } from "uuid";

    const generatedId = uuidv4()

    const form = reactive({
        id: generatedId,
        name: '',
        price: '',
    })
    
    const saveItem = async () => {
        await storeItem({ ...form })
    }
    
    
    onMounted(getItems)
    </script>
    