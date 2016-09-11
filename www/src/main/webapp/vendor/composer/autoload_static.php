<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit353462e27b793bc82ca4bacc6440480e
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Component\\EventDispatcher\\' => 34,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Component\\EventDispatcher\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/event-dispatcher',
        ),
    );

    public static $prefixesPsr0 = array (
        'M' => 
        array (
            'Mailgun\\Tests' => 
            array (
                0 => __DIR__ . '/..' . '/mailgun/mailgun-php/tests',
            ),
            'Mailgun' => 
            array (
                0 => __DIR__ . '/..' . '/mailgun/mailgun-php/src',
            ),
        ),
        'G' => 
        array (
            'Guzzle\\Tests' => 
            array (
                0 => __DIR__ . '/..' . '/guzzle/guzzle/tests',
            ),
            'Guzzle' => 
            array (
                0 => __DIR__ . '/..' . '/guzzle/guzzle/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit353462e27b793bc82ca4bacc6440480e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit353462e27b793bc82ca4bacc6440480e::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit353462e27b793bc82ca4bacc6440480e::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
