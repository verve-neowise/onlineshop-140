<script lang="ts">
import axios from "axios";

  import { navigate } from "svelte-navigator";
  import { brandStore, fetchBrands } from "../store/brand.store";

  fetchBrands();

  let form: HTMLFormElement
  let modalCheck: HTMLInputElement;

  function create() {
      let data = new FormData(form)

      axios.post('http://localhost:9090/products', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }
</script>

<main class="container mx-auto p-6">
  <div class="flex justify-between">
    <h1 class="text-5xl font-bold">Products</h1>
    <label for="my-modal" class="btn modal-button">Add Product</label>
  </div>

  <div class="grid grid-cols-4 gap-3 mt-10">
    <!--  -->
    <!-- {#each $brandStore as brand}
      <BrandItem id={brand.id} name={brand.name}/>
    {/each} -->
    <!--  -->
  </div>

  <input
    bind:this={modalCheck}
    type="checkbox"
    id="my-modal"
    class="modal-toggle"
  />

  <div class="modal">
    <form
      bind:this={form}
      action="http://localhost:9090/products"
      enctype="multipart/form-data"
      method="post"
    >
      <div class="modal-box">
        <h3 class="font-bold text-2xl">Create Product</h3>

        <div class="flex flex-col gap-2 mt-4">
          <input type="text" name="name" placeholder="Name" class="input input-bordered w-full" />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <input type="text" name="description" placeholder="Description" class="input input-bordered w-full" />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <input
            type="number"
            name="price"
            placeholder="Price"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <input
            type="file"
            name="poster"
            placeholder="Poster"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <select
            class="select select-bordered w-full"
            name="brand_id"
            placeholder="Select Brand"
          >
            <option disabled selected>No Brand</option>
            {#each $brandStore as brand}
              <option value={brand.id}>{brand.name}</option>
            {/each}
          </select>
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <select
            class="select select-bordered w-full"
            name="category_id"
            placeholder="Select Category"
          >
            <option disabled selected>No Categories</option>
            <option value="1"></option>
          </select>
        </div>

        <div class="modal-action">
          <button on:click|preventDefault={create} class="btn btn-primary">Create</button>
          <label for="my-modal" class="btn">Close</label>
        </div>
      </div>
    </form>
  </div>
</main>
