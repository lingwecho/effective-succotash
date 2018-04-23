<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:84:"F:\phpStudy\PHPTutorial\WWW\kill\public/../application/admin\view\activity\edit.html";i:1523498261;s:75:"F:\phpStudy\PHPTutorial\WWW\kill\application\admin\view\layout\default.html";i:1523111344;s:72:"F:\phpStudy\PHPTutorial\WWW\kill\application\admin\view\common\meta.html";i:1523111344;s:74:"F:\phpStudy\PHPTutorial\WWW\kill\application\admin\view\common\script.html";i:1523111344;}*/ ?>
<!DOCTYPE html>
<html lang="<?php echo $config['language']; ?>">
    <head>
        <meta charset="utf-8">
<title><?php echo (isset($title) && ($title !== '')?$title:''); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">

<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<!-- Loading Bootstrap -->
<link href="/assets/css/backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.css?v=<?php echo \think\Config::get('site.version'); ?>" rel="stylesheet">

<!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
<!--[if lt IE 9]>
  <script src="/assets/js/html5shiv.js"></script>
  <script src="/assets/js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript">
    var require = {
        config:  <?php echo json_encode($config); ?>
    };
</script>
    </head>

    <body class="inside-header inside-aside <?php echo defined('IS_DIALOG') && IS_DIALOG ? 'is-dialog' : ''; ?>">
        <div id="main" role="main">
            <div class="tab-content tab-addtabs">
                <div id="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <section class="content-header hide">
                                <h1>
                                    <?php echo __('Dashboard'); ?>
                                    <small><?php echo __('Control panel'); ?></small>
                                </h1>
                            </section>
                            <?php if(!IS_DIALOG): ?>
                            <!-- RIBBON -->
                            <div id="ribbon">
                                <ol class="breadcrumb pull-left">
                                    <li><a href="dashboard" class="addtabsit"><i class="fa fa-dashboard"></i> <?php echo __('Dashboard'); ?></a></li>
                                </ol>
                                <ol class="breadcrumb pull-right">
                                    <?php foreach($breadcrumb as $vo): ?>
                                    <li><a href="javascript:;" data-url="<?php echo $vo['url']; ?>"><?php echo $vo['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                            <!-- END RIBBON -->
                            <?php endif; ?>
                            <div class="content">
                                <form id="edit-form" class="form-horizontal" role="form" data-toggle="validator" method="POST" action="">

    <div class="form-group">
        <label for="c-cafecube_id" class="control-label col-xs-12 col-sm-2"><?php echo __('Cafecube_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-cafecube_id" data-rule="required" data-source="cafecube/index" class="form-control selectpage" name="row[cafecube_id]" type="text" value="<?php echo $row['cafecube_id']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-play_id" class="control-label col-xs-12 col-sm-2"><?php echo __('Play_id'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-play_id" data-rule="required" data-source="play/index" class="form-control selectpage" name="row[play_id]" type="text" value="<?php echo $row['play_id']; ?>">
        </div>
    </div>
    <!--<div class="form-group">-->
        <!--<label for="c-user_ids" class="control-label col-xs-12 col-sm-2"><?php echo __('User_ids'); ?>:</label>-->
        <!--<div class="col-xs-12 col-sm-8">-->
            <!--<input id="c-user_ids" data-rule="required" data-source="user/index" data-multiple="true" data-field="nickname" class="form-control selectpage" name="row[user_ids]" type="text" value="<?php echo $row['user_ids']; ?>">-->
        <!--</div>-->
    <!--</div>-->
    <div class="form-group">
        <label for="c-starttime" class="control-label col-xs-12 col-sm-2"><?php echo __('Starttime'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-starttime" data-rule="required" class="form-control datetimepicker" data-date-format="YYYY-MM-DD HH:mm:ss" data-use-current="true" name="row[starttime]" type="text" value="<?php echo $row['starttime']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-description" class="control-label col-xs-12 col-sm-2"><?php echo __('Description'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-description" data-rule="required" class="form-control" name="row[description]" type="text" value="<?php echo $row['description']; ?>">
        </div>
    </div>
    <div class="form-group">
        <label for="c-num" class="control-label col-xs-12 col-sm-2"><?php echo __('Num'); ?>:</label>
        <div class="col-xs-12 col-sm-8">
            <input id="c-num" data-rule="required" class="form-control" name="row[num]" type="text" value="<?php echo $row['num']; ?>">
        </div>
    </div>
    <div class="form-group layer-footer">
        <label class="control-label col-xs-12 col-sm-2"></label>
        <div class="col-xs-12 col-sm-8">
            <button type="submit" class="btn btn-success btn-embossed disabled"><?php echo __('OK'); ?></button>
            <button type="reset" class="btn btn-default btn-embossed"><?php echo __('Reset'); ?></button>
        </div>
    </div>
</form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/assets/js/require<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js" data-main="/assets/js/require-backend<?php echo \think\Config::get('app_debug')?'':'.min'; ?>.js?v=<?php echo $site['version']; ?>"></script>
    </body>
</html>