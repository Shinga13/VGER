<script>
    import Sidebar from '$lib/sidebar/Sidebar.svelte';
    import { mobile, mobile_sidebar_active } from '$lib/stores';

    // listens for request to show mobile sidebar
    mobile_sidebar_active.subscribe(()=>{
        try {
            let mobile_div = document.getElementById('mobile_sidebar');
            if ($mobile_sidebar_active == true) {
                mobile_div.style.transform = 'translateX(100vw)';
            }
            if ($mobile_sidebar_active == false) {
                mobile_div.style.transform = 'translateX(0)';
            }
        }
        catch {} 
    })

</script>

<!-- Mobile sidebar is basically the normal sidebar slotted inside a sliding div-->
<div id='mobile_sidebar'>
    <Sidebar/>
</div>

<style>
div {
    width: calc(100vw - 2*var(--gutter));
    padding: calc(2*var(--gutter));
    background-color: var(--dark-background);
    overflow-y: visible;
    position: absolute;
    height: calc(100vh - 100vw*(143/1920) - 5*var(--gutter)); /*viewport height minus top banner height, height of the bottom margin and height of the menu bar*/
    height: calc(var(--vh, 1vh) * 100 - 100vw*(143/1920) - 5*var(--gutter)); 
    left: -100vw;
    transition: transform .5s cubic-bezier(0.075, 0.1, 0.165, 1);
    z-index: 3;
    /*border-left: var(--gutter) solid var(--science-blue);*/
    border-top: calc(.5*var(--border)) solid var(--science-blue);
    margin-left: var(--gutter);
}
</style>