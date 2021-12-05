<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'bdaas_blog' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'bdaas_blog' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'j998$jddf' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'bdaas_blog.mysql.dbaas.com.br' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'T}AR)u#In&<fC+2kAMDiN?2j-_y(INBPB@;z?:(y~u5ME*&f/PY8gZ]DqlmW(xYK' );
define( 'SECURE_AUTH_KEY',  '6DyWgFW %+[QRxb,._o)>nf]dUpQ[~,,6j#0`-+lPt+O>l%6+@7)!!tGKli4C*=~' );
define( 'LOGGED_IN_KEY',    ']][dD_P:kLbA$6(07~Qc0@.fETBL;3l6l ?[:,ZE!`/+(#=eSc&S`/n/O=Eb{nq}' );
define( 'NONCE_KEY',        '{oMu%{Zi(IRT*hJ}$qtZaA,q3k?$vMs7!QGZ@>^GF_}bw+rJ5|#B}TLuA])?Pu!f' );
define( 'AUTH_SALT',        'xBJ#g:[DzrCL`~)2_@aLNjQ;QC*WJ[)7HPwT(YI:zvp*ur?YZ3/@{sFeG[t/8Y$<' );
define( 'SECURE_AUTH_SALT', '|u56QfuPX$i2^+zrJIAtUf^LtS?nGK9#JxoFSjyyot;v&Aq?FB2BmP|P*7/v]RQf' );
define( 'LOGGED_IN_SALT',   'BQ{Tj/q~oJLyWaI9UR$u_[SPKBqI yObYMWsD2u}[h,:oKteiQPt;S$4Q^B,/ohP' );
define( 'NONCE_SALT',       'HxwdrwJbcD_c,jf2<,NB.9&BYKt<~(Q.r|Vv<ZtTziv9 :/HT~]0ajc>2LA4TToW' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
