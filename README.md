# Warista Marketplace

*Warista* is a modern online shopping platform built using **Next.js**, **Sanity CMS**, and integrates third-party APIs like **Stripe** for payments and **ShipEngine** for shipping.

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## 📦 Project Overview

Avion allows users to explore and purchase products, manage their cart and wishlist, and track shipments. It is fully optimized for different devices with a responsive design and is built using modern technologies like React and Next.js for the front-end.

---

## 🖥️ Tech Stack

| Feature             | Technology       |
|---------------------|------------------|
| **Front-End**       | Next.js 14, React |
| **Backend (CMS)**   | Sanity.io        |
| **Authentication**  | Clerk            |
| **Payments**        | Stripe           |
| **Shipping**        | ShipEngine       |

---

## ✅ Features Implemented

### 🖥️ Front-End (Next.js)
- **Landing Page:** Showcases popular products.
- **Header & Navigation:** Easy navigation links to Products, Cart, and Login.
- **Footer:** Additional marketplace information.
- **Product Page:** Search, Pagination, and Category Filtering.
- **Cart Page:** Add, remove, increment, decrement, and clear cart items.
- **Wishlist Page:** Save products for future purchase.
- **Shipment Process UI:** Forms for rate lists and tracking details.
- **Responsive Design:** Optimized for mobile, tablet, and desktop views.
- **API Handling:** Dynamic data fetching using React hooks.

---

## 🔗 API Handling Example in Next.js

```typescript
const productApi = async (api: string) => {
    try {
        const productData = await fetch(api, { cache: 'force-cache' });
        const fetchProduct = await productData.json();
        console.log(fetchProduct);
        return fetchProduct;
    } catch (error) {
        throw new Error(`Product not found: ${error}`);
    }
};
```

---

## 🚀 Sanity (CMS)

Sanity is used to manage products, orders, etc.

- Run the migration file (`migrate.mjs`) in the scripts folder to migrate mock API data.
- Use `.env` for private data like tokens.
- Define the product schema to structure data in Sanity.

### 📋 Product Schema

```javascript
export const product = {
    name:'product',
    title:'Product',
    type:'document',
    fields:[
        {
            name:'id',
            title:'Product ID',
            type:'string'
        },
        {
            name:'productname',
            title:'Product Name',
            type:'string',
        },
        {
            name:'category',
               title:'Category Name',
            type:'string'
        },
        {
            name:'productimg',
               title:'Product Img',
            type:'image'
        },
        {
            name:'description',
               title:'Product Description',
            type:'text'
        },
        {
            name:'price',
            title:'Product Price',
            type:'number'
        },
        {
            name:'discount',
            title:'Discount',
            type:'number'
        },
        {
            name:'stock',
            title:'Product Stock',
            type:'number'
        },
        {
            name:'tags',
            title:'Product Tags',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'productcolors',
            title:'Product Colors',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'productsizes',
            title:'Product Sizes',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'rating',
            title:'Product Rating',
            type:'number'
        },
        {
            name:'reviewlist',
            title:'Review List',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'createdAt',
            title:'Created Date',
            type:'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 30, // Allow selection in 30-minute intervals
                calendarTodayLabel: 'Set to Today',
              },
              initialValue: () => new Date().toISOString(), // Default to the current date and time
        },
        {
            name:'updatedAt',
            title:'Updated Date',
            type:'datetime'
        },
    ]
}
```

---

## 🔑 Key Features

### 🛍️ User Authentication
- **Registration:** Users must register to purchase items.
- **Login:** Registered users can log in to manage their carts and wishlist.

### 📦 Product Listing
- **Search, Pagination, Filters:** For easy product discovery.
- **Data Source:** Products fetched from Sanity CMS.

### ❤️ Wishlist
- Save products for future purchases.

### 🛒 Cart Management
- Add, remove, update quantity, and checkout securely via Stripe.

### 🚚 Shipment Tracking
- Real-time tracking with ShipEngine.

---

## 🌐 Third-Party APIs

| Endpoint      | Method | Purpose                    | Example Response                            |
|---------------|--------|----------------------------|---------------------------------------------|
| /productlist  | GET    | Fetch product details      | { "name": "Product Name", "price": 100 }    |
| /tracking     | GET    | Real-time tracking updates | { "trackingId": "AB123", "status": "In Transit" } |
| /inventory    | GET    | Real-time stock levels     | { "productId": 789, "stock": 50 }          |
| /cart         | POST   | Add to cart                | { "cartId": 101, "items": [...] }          |
| /wishlist     | POST   | Add to wishlist            | { "wishlistId": 202, "items": [...] }      |

---

## 🛠️ Testing

### ✅ Tested Workflows
- **Registration & Login:** Smooth user authentication.
- **Product Listing:** Search, filter, pagination work correctly.
- **Cart & Wishlist:** Add/remove items without errors.
- **Checkout:** Secure payments via Stripe.
- **Shipment Tracking:** Real-time tracking updates.

### 🏆 Test Results
All sections have been successfully tested and are working perfectly! 🎉

---

## 🚀 Deployment

### 🔧 Steps:
1. **Prepare the Code:** Ensure all features are complete.
2. **Environment Variables:** Set up `.env` securely.
3. **Deploy:** Push code to GitHub and deploy via Vercel.
4. **Final Testing:** Verify everything in production.
5. **Live Marketplace:** Ready for users!

---

## 🏁 Conclusion

- **Front-End:** Built with Next.js + TypeScript.
- **CMS:** Managed with Sanity.
- **APIs:** Secure payments (Stripe) & shipment tracking (ShipEngine).

---

## 🎯 The End 🎯

