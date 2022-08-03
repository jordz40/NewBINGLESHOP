localhost:9000/auth/getItem 
localhost:9000/auth/register
localhost:9000/auth/login
localhost:9000/orders
{
    "items": [{
        "item_name": "sepatu Nike Air Jordan",
        "items_id":1,
        "item_qty":2
    },
    {
        "item_name": "TAS SUPREME",
        "items_id":2,
        "item_qty":4
    }
    ]
        
}

1. sudah bisa migrate db sama seed seeder
2. bisa register dan validasi
3. bisa login dan dapat token,
4. bisa get item dari table items
5. bisa orderitem (create order succes) tapi belum masuk database
6. order item diberi validation masih error (sepertinya di index model)
7. belum ada update order