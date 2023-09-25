<template>
    <div>
        <Navbar />
        <div class="container mx-auto pt-24 pb-14">
            <slot />
        </div>
        <Footer class="fixed bottom-0 w-full z-10  " />
    </div>
</template>
