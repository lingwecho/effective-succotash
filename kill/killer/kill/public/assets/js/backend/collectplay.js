define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'collectplay/index',
                    add_url: 'collectplay/add',
                    edit_url: 'collectplay/edit',
                    del_url: 'collectplay/del',
                    multi_url: 'collectplay/multi',
                    table: 'collectplay',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'name', title: __('Name')},
                        {field: 'content', title: __('Content')},
                        {field: 'images', title: __('Images'), formatter: Table.api.formatter.images},
                        {field: 'numb', title: __('Numb')},
                        {field: 'numbs', title: __('Numbs')},
                        {field: 'description', title: __('Description')},
                        {field: 'keywords', title: __('Keywords')},
                        {field: 'user.username', title: __('User.username')},
                        {field: 'user.nickname', title: __('User.nickname')},
                        {field: 'user.avatar', title: __('User.avatar')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});