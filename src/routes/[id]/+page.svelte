<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import Mercury from '../../lib/images/planet-mercury.svg';

	export let data: PageData;
	let activeTab = 'overview';

	function setActiveTab(tab: string) {
		activeTab = tab;
	}

	function getTabContent(tab: string) {
		switch (tab) {
			case 'overview':
				return data.planet.overview?.content;
			case 'structure':
				return data.planet.structure?.content;
			case 'geology':
				return data.planet.geology?.content;
			default:
				return null;
		}
	}
</script>

<div class="md:max-w-[1110px] w-full mx-auto flex md:flex-col md:gap-20 px-10 sm:gap-7 sm:flex-col">
	<div
		class="md:max-w-[1110px] w-full mx-auto flex md:flex-row md:justify-end md:items-center md:gap-[300px] md:pt-32 text-white sm:pt-12 sm:gap-9 sm:items-center sm:flex-col"
	>
		<div class="md:w-[400px] md:h-[400px] sm:w-[369px] sm:h-[369px]">
			<img class="w-full" src={Mercury} alt={`planet - ${data.planet.name}`} />
		</div>
		<div
			class="md:max-w-[350px] w-full flex md:flex-col md:gap-10 sm:max-w-full sm:flex-row sm:items-center sm:gap-[69px]"
		>
			<div class="flex flex-col gap-6 min-h-[155px] sm:max-w-[339px]">
				<h1 class="text-[80px] uppercase">{data.planet.name}</h1>
				<p class="text-sm leading-6">{data.planet.overview.content}</p>
				<div class="flex gap-2 items-center">
					<p class="text-xs tracking-[2.5px] opacity-50 leading-6">Source :</p>
					<a class="flex gap-2 items-center underline" href={data.planet.overview.source}>
						<p class="text-sm tracking-[2.5px] opacity-50 font-bold leading-6">Wikipedia</p>
						<div class="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
							>
								<path
									opacity="0.5"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
									fill="white"
								/>
							</svg>
						</div>
					</a>
				</div>
			</div>
			<div class="w-full flex flex-col gap-4">
				<button
					class={`${activeTab === 'overview' ? 'active-tab' : ''} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 py-3 pl-7 gap-7 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
					on:click={() => setActiveTab('overview')}
				>
					<p class="text-xs tracking-[2.5px] uppercase font-bold leading-6 opacity-50">01</p>
					<p class="text-xs tracking-[2.5px] uppercase font-bold leading-6">Overview</p>
				</button>
				<button
					class={`${activeTab === 'structure' ? 'active-tab' : ''} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 py-3 pl-7 gap-7 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
					on:click={() => setActiveTab('structure')}
				>
					<p class="text-xs tracking-[2.5px] uppercase font-bold leading-6 opacity-50">02</p>
					<p class="text-xs tracking-[2.5px] uppercase font-bold leading-6">Internal Structure</p>
				</button>
				<button
					class={`${activeTab === 'geology' ? 'active-tab' : ''} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 py-3 pl-7 gap-7 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
					on:click={() => setActiveTab('geology')}
				>
					<p class="text-xs tracking-[2.5px] uppercase font-bold leading-6 opacity-50">03</p>
					<p class="text-xs tracking-[2.5px] uppercase font-bold leading-6">Surface Geology</p>
				</button>
			</div>
		</div>
	</div>
	<div class="w-full flex gap-7 text-white">
		<div
			class="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5"
		>
			<p
				class="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]"
			>
				ROTATION TIME
			</p>
			<h3
				class="md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]"
			>
				58.6 days
			</h3>
		</div>
		<div
			class="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5"
		>
			<p
				class="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]"
			>
				ROTATION TIME
			</p>
			<h3
				class="md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]"
			>
				58.6 days
			</h3>
		</div>
		<div
			class="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5"
		>
			<p
				class="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]"
			>
				ROTATION TIME
			</p>
			<h3
				class="md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]"
			>
				58.6 days
			</h3>
		</div>
		<div
			class="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5"
		>
			<p
				class="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]"
			>
				ROTATION TIME
			</p>
			<h3
				class="md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]"
			>
				58.6 days
			</h3>
		</div>
	</div>
</div>

<style>
	.active-tab {
		background-color: #419ebb;
	}
</style>
