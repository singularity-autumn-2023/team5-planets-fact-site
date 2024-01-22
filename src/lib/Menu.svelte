<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="menu">
	<ul>
		<li>
			<a href=".{$page.url.pathname}?tab=overview"><span>01</span>Overview</a>
		</li>
		<li>
			<a href=".{$page.url.pathname}?tab=internal-structure"><span>02</span>Internal Structure</a>
		</li>
		<li>
			<a href=".{$page.url.pathname}?tab=surface-geology"><span>03</span>Surface Geology</a>
		</li>
	</ul>
</div>
