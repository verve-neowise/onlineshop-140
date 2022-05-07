<script lang="ts">
import Brands from "./pages/Brands.svelte";
import { Router, Route, Link } from 'svelte-navigator'
import Categories from "./pages/Categories.svelte";
</script>

<Router>
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal p-0">
				<li><Link to="/brands">Brands</Link></li>
				<li><Link to="/categories">Categories</Link></li>
				<li><Link to="/products">Products</Link></li>
			</ul>
		</div>
	</div>
	
	<main>
		<Route path="/brands" component={Brands}/>
		<Route path="/categories" component={Categories}/>
	</main>

</Router>

