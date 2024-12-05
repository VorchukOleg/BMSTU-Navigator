import sqlite3

conn = sqlite3.connect('datab.db')
c = conn.cursor()

# Создание таблицы вершин
c.execute('CREATE TABLE IF NOT EXISTS vertexpoints (codename TEXT, coordinates TEXT)')

# Создание таблицы ребер
c.execute('CREATE TABLE IF NOT EXISTS edges (source TEXT, target TEXT, weight REAL)')

# Заполнение таблицы вершин данными
vertexpoints = [
    ('104', '(50.1, 109.5)'),
    ('106', '(60.4, 110.4)'),
    ('101', '(51.2, 84.3)'),
    ('WC1', '(68.8, 101.7)'),

    ('лестница1', '(75.6, 101.7)'),
    ('лестница2', '(91.2, 102.8)'),
    ('лестница3', '(78.7, 78.8)'),

    ('WC2', '(97.4, 101.0)'),
    ('028A', '(107.9, 112.2)'),
    ('034A', '(122.8, 112.2)'),
    ('062A', '(135.8, 111.3)')
]
c.executemany('INSERT INTO vertexpoints (codename, coordinates) VALUES (?, ?)', vertexpoints)

# Заполнение таблицы ребер данными
edges = [
    ('коридор1', 'коридор2', 3),
    ('коридор2', 'коридор3', 3),

    ('коридор1', '104', 5),
    ('коридор1', '106', 5),
    ('коридор1', '101', 5),
    ('коридор1', 'WC1', 5),

    ('коридор2', 'лестница1', 5),
    ('коридор2', 'лестница2', 5),
    ('коридор2', 'лестница3', 5),

    ('коридор3', 'WC2', 5),
    ('коридор3', '028A', 5),
    ('коридор3', '034A', 5),
    ('коридор3', '062A', 5)
]
c.executemany('INSERT INTO edges (source, target, weight) VALUES (?, ?, ?)', edges)

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()

