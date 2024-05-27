<template>
    <ul role="list" class="divide-y divide-gray-100">
        <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
      
                <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">Name</p>
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ item.name }}</p>
                </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p class="text-sm font-semibold leading-6 text-gray-900">Price</p>
                <p class="mt-1 text-xs leading-5 text-gray-500">
                    ${{ item.price }}
                </p>
            </div>
        </li>
    </ul>

    <div class="px-6 py-2 text-sm rounded">
        <a class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600" @click="$router.go(-1)">Voltar</a>
    </div>

</template>
 
<script setup>
import useItems from '../../composables/items'
import { onMounted } from 'vue';
 
const { errors, item, getItem } = useItems()
const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getItem(props.id))
 
</script>