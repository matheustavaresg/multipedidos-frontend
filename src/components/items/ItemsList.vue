<template>
    

  <div class="mb-4">
    <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">Items</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Items List</p>
    </div>
    <div class="flex mb-4 place-content-end">
        <div class="px-6 py-2 text-sm rounded">
            <router-link :to="{ name: 'items.add' }" class="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Add Item</router-link>
        </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-xs font-semibold leading-6 tracking-wider text-left text-gray-900 uppercase border-b border-gray-200 bg-gray-50">
                ID</th>
                <th
                class="px-6 py-3 text-xs font-semibold leading-6 tracking-wider text-left text-gray-900 uppercase border-b border-gray-200 bg-gray-50">
                Name</th>
                <th
                class="px-6 py-3 text-xs font-semibold leading-6 tracking-wider text-left text-gray-900 uppercase border-b border-gray-200 bg-gray-50">
                Price</th>
              <th class="px-6 py-3 text-xs font-semibold leading-6 tracking-wider text-left text-gray-900 uppercase border-b border-gray-200 bg-gray-50" colspan="3">
                Actions</th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="item in items" :key="item.id">
              <td class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                {{ item.id }}
              </td>
              
              <td class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                {{ item.name }}
              </td>

              <td class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                {{ item.price }}
              </td>

                 <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                  <div class="grid grid-cols-3 gap-3">
                
                    <router-link :to="{ name: 'items.show', params: { id: item.id } }">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                      </svg>
                    </router-link>

                    <router-link :to="{ name: 'items.edit', params: { id: item.id } }">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-blue-500 w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </router-link>
                    
                      <button @click="deleteMarchante(item.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-red-500 w-6 h-6">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                      </svg>
                    </button>
                
                
                  </div>
              </td>
              
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>
 
<script setup>
import useItems from '../../composables/items'
import { computed, onMounted } from 'vue';
 
const { items, getItems, destroyItem } = useItems()

const deleteItem = async (id) => {
    if (!window.confirm('Confirmar?')) {
        return
    }
 
    await destroyItem(id)
    await getItems()
}


onMounted(getItems)
</script>