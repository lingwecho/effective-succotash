define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'activity/index',
                    add_url: 'activity/add',
                    edit_url: 'activity/edit',
                    del_url: 'activity/del',
                    multi_url: 'activity/multi',
                    table: 'activity',
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
                        {field: 'cafecube_id', title: __('Cafecube_id')},
                        {field: 'play_id', title: __('Play_id')},
                        {field: 'user_ids', title: __('User_ids')},
                        {field: 'starttime', title: __('Starttime'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'description', title: __('Description')},
                        {field: 'num', title: __('Num')},
                        {field: 'cafecube.name', title: __('Cafecube.name')},
                        {field: 'cafecube.address', title: __('Cafecube.address')},
                        {field: 'cafecube.description', title: __('Cafecube.description')},
                        {field: 'play.name', title: __('Play.name')},
                        {field: 'play.numb', title: __('Play.numb')},
                        {field: 'play.numbs', title: __('Play.numbs')},
                        {field: 'play.description', title: __('Play.description')},
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