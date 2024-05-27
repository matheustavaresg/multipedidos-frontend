import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
 
export default function useItems() {
  
    let config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,PATCH,DELETE"
        },
    };

    const item = ref([])
    const items = ref([])
 
    const errors = ref('')
    const router = useRouter()
 
    const getItems = async () => {
        let response = await axios.get('/items', config)
        items.value = response.data
    }
 
    const getItem = async (id) => {
        let response = await axios.get(`/items/${id}`, config)
        item.value = response.data
    }
 
    const storeItem = async (data) => {
        errors.value = ''
        try {
            await axios.put('/items', data, config)
            await router.push({ name: 'items' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
 
    }
 
    const updateItem = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/items/${id}`, item.value, config)
            await router.push({ name: 'items' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
    }

    const destroyItem = async (id) => {
        await axios.delete(`/items/${id}`, config)
    }
 
    return {
        errors,
        item,
        items,
        getItem,
        getItems,
        storeItem,
        updateItem,
        destroyItem
    }
  
}