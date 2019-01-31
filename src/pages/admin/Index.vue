<template>
    <div class="admin-new mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <ul class="list-group">
                        <li class="list-group-item"><router-link to="/admin">View Products</router-link></li>
                        <li class="list-group-item"><router-link to="/admin/new">New Product</router-link></li>
                    </ul>
                </div>

                <router-view class="mt-sm-3 offset-2"></router-view>

            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
